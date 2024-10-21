import jwt from 'jsonwebtoken'
import ldap from 'ldapjs'

const config = {
    url:process.env.LDAP_URL,
    baseDN:process.env.LDAP_BASEDN
}

function getProperObject(entry) {
    var obj = {
        dn: entry.dn.toString(),
        controls: []
    };
    entry.attributes.forEach(function (a) {
        var buf = a.buffers;
        var val = a.values;
        var item;
        if ( a?.type === 'thumbnailPhoto' )
            item = buf;
        else
        item = val;
        if (item && item.length) {
            if (item.length > 1) {
                obj[a.type] = item.slice();
            } else {
                obj[a.type] = item[0];
            }
        } else {
            obj[a.type] = [];
        }
    });
    entry.controls.forEach(function (element, index, array) {
        obj.controls.push(element.json);
    });
    return obj;
}

//Foto usuario desde LDAP
export const getPhotoid = async (req, res) => {
    const client = ldap.createClient({
        url:[process.env.LDAP_URL,process.env.LDAP_URL2],        
        /*timeout:9000,
        connectTimeout:9000,
        idleTimeout:9000,
        reconnect:false*/
    })
    
    client.on('error', error => {
        console.error(error)
    });


    const { id } = req.params
    // Crear schema para validar los datos de entrada
    const token = req.cookies.access_token
    if(!token){
        res.status(403).json({"error":401,message:"No autorizado"});
        return;
    }    
    
    //Rescatando datos del payload del token
    try {
        let usrId
        let usrIdentificadorSender
        jwt.verify(token, process.env.JWT_SECRETO, function(err, decoded) {            
            if (err) {                
                throw new Error('No autorizado')
            }
            const { usrId : usr_Id, usrIdentificadorSender : usr_IdentificadorSender } = decoded
            usrId = usr_Id
            usrIdentificadorSender = usr_IdentificadorSender
        })

        //Conectando con LDAP
        client.bind('cn=tic, OU=Informatica,OU=MINTRAB_GENERICOS,DC=MINTRAB,DC=MS','Usuario2018', (err) => {
            console.log('Error en bind ldap', err)
        })
        var opts = {
            filter: '(mail=' + id + '@*)',
            scope: 'sub',            
            attributes: ['cn','sn','mail','givenname','department','extensionAttribute1','extensionAttribute2','thumbnailPhoto']
        };
                
        client.search('OU=MINTRAB,DC=MINTRAB,DC=MS', opts, function(err, resx) {            
            resx.on('searchEntry', function(entry){                
                const file = entry.object?.thumbnailPhoto;
                const imgbase64 = getProperObject(entry).thumbnailPhoto
                if(imgbase64!==undefined){
                    res.set({
                        'Content-Type': 'image/jpg',
                        'Content-Length': imgbase64.length
                    });
                    client.unbind();                    
                    res.send(imgbase64);
                }else{
                    client.unbind();
                    res.send(null)
                }
                return
            });
            resx.on('searchReference', function(referral) {
                console.log('referral: ' + referral.uris.join());                
                return
            });
            resx.on('error', function(err) {
                console.error('error: ' + err.message);
                //res.sendStatus(404);
                return
            });
            resx.on('end', function(result) {
                console.log('status: ' + result.status);
                //res.sendStatus(200);
                return
            });
            
        });

    }catch (error) {
        if(error.message === 'No autorizado'){
            res.status(401).json({"error":401,message:error.message});
            return;
        }
        res.status(500).json({"id":"photo","error":500,message:error.message});
    }    
}
