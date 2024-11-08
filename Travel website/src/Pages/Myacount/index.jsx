import { Box, Stack, Typography, Container, Button } from "@mui/material";
import { useState, useEffect } from "react";
import personjon from "../../assets/personjon.png"; // Varsayılan profil resmi
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Footer from "../../Companents/Footer";
import "./myAccount.css";

const MyAccount = ({ user }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');  // Başlangıçta boş şifre
    const [profilePic, setProfilePic] = useState(personjon);  // Başlangıçta varsayılan profil resmi
    const [passwordVisible, setPasswordVisible] = useState(false); // Şifrenin görünürlüğünü kontrol etmek için bir state

    useEffect(() => {
        if (user) {
            setName(user.name || '');
            setPassword(user.password || '');  // Eğer kullanıcı varsa, şifreyi alıyoruz, yoksa boş bırakıyoruz
            setProfilePic(user.profilePic || personjon); // Kullanıcı profil fotoğrafını alıyoruz
        } else {
            // Eğer kullanıcı çıkış yaptıysa, verileri sıfırla
            setName('');
            setPassword(''); // Şifreyi boş bırakıyoruz
            setProfilePic(personjon); // Profil fotoğrafını sıfırlıyoruz
        }
    }, [user]);  // user değiştiğinde çalışacak, yani logout olduğunda sıfırlanacak

    // Kullanıcı fotoğrafını değiştirme
    const changeProfilePic = (e) => {
        const file = e.target.files[0]; // Seçilen dosyayı al
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result); // Profil fotoğrafını değiştir
            };
            reader.readAsDataURL(file); // Dosyayı okuyup base64 formatına çevir
        }
    };

    // Kullanıcı fotoğrafını silme
    const removeProfilePic = () => {
        setProfilePic(personjon); // Varsayılan fotoğrafı geri getir
    };

    // Şifreyi değiştirme
    const changeData = (message, currentValue, setValue) => {
        const newValue = prompt(message, currentValue);
        if (newValue !== null) {
            setValue(newValue);
        }
    };

    // Şifre görünürlük kontrolü
    const togglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev); // Şifrenin görünürlüğünü değiştir
    };

    return (
        <>
            <Box className="my-account-container" marginTop="30px">
                <Container>
                    <Stack alignItems="center" spacing={3}>
                        {/* Başlık */}
                        <Typography variant="h4" sx={{ fontWeight: "bold" }}>Account Settings</Typography>

                        {/* Kullanıcı adı */}
                        <Typography variant="h5" sx={{ fontWeight: 500, color: "#333" }}>
                            {name ? name.charAt(0).toUpperCase() + name.slice(1) : 'User'}
                        </Typography>

                        {/* Profil fotoğrafı */}
                        <Box className="profile-image-container">
                            <img src={profilePic} alt="Profile" className="profile-image" />
                            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                                <Button
                                    variant="contained"
                                    component="label"
                                    sx={{
                                        backgroundColor: "#1976d2",
                                        "&:hover": { backgroundColor: "#1565c0" },
                                        textTransform: "none",
                                    }}
                                >
                                    Change Photo
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={changeProfilePic}
                                        hidden
                                    />
                                </Button>
                                <Button
                                    variant="outlined"
                                    onClick={removeProfilePic}
                                    sx={{
                                        textTransform: "none",
                                        color: "#d32f2f",
                                        borderColor: "#d32f2f",
                                        "&:hover": { borderColor: "#c62828", color: "#c62828" }
                                    }}
                                >
                                    <DeleteIcon sx={{ marginRight: 1 }} /> Remove
                                </Button>
                            </Stack>
                        </Box>

                        {/* Şifre değiştirme kısmı */}
                        <Box className="account-info-box" sx={{ width: "100%" }}>
                            <Stack
                                className="account-change"
                                flexDirection="row"
                                justifyContent="space-between"
                                alignItems="center"
                                sx={{
                                    padding: "12px 16px",
                                    borderRadius: 2,
                                    boxShadow: 2,
                                    backgroundColor: "#f7f7f7",
                                    marginTop: 3
                                }}
                            >
                                <Stack flexDirection="column" gap="5px">
                                    <Typography variant="body1" color="darkgray">Password</Typography>
                                    <Typography variant="h5" color="#333">
                                        {passwordVisible ? password : (password === '' ? "No password set" : "******")}
                                        {/* Eğer şifre boşsa "No password set" yazsın */}
                                    </Typography>
                                </Stack>
                                <Stack
                                    className="change-button"
                                    onClick={() => changeData('Enter your new password...', password, setPassword)}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        cursor: "pointer",
                                        color: "#1976d2",
                                    }}
                                >
                                    <Box><BorderColorIcon /></Box>
                                    <Typography sx={{ marginLeft: 1 }}>Change</Typography>
                                </Stack>
                                <Stack
                                    onClick={togglePasswordVisibility}
                                    sx={{
                                        cursor: "pointer",
                                        color: "#1976d2",
                                    }}
                                >
                                    {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />} {/* Şifreyi gösterme / gizleme */}
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </Container>
            </Box>

            <Footer />
        </>
    );
};

export default MyAccount;
