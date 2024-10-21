//Logout
export const postLogout = async (req, res) => {
    // Set token to none and expire after 5 seconds
    res.cookie('access_token', 'none', {
        expires: new Date(Date.now() + 5 * 1000),
        httpOnly: true,
    })
    res.status(200).json({ success: true, message: 'Usuario desloaguedo satisfactoriamente.' })    
}