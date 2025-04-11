import {
  Box,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import globlack from "../../assets/globblack.png";
import { Link, useNavigate } from "react-router-dom";
import BurgerMenu from "../../Companents/Burgermenu";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../features/userSlice";

const HeadNav = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(removeUser());
    window.location.reload();
    navigate("/");
  };

  return (
    <Stack
      className="header_container"
      padding="20px"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Link to="/" style={{ cursor: "pointer" }}>
        <Box>
          <img src={globlack} alt="Logo" />
        </Box>
      </Link>

      <Stack
        className="header_links"
        gap="30px"
        flexDirection="row"
        alignItems="center"
      >
        <Link
          className="nav_head"
          to="/about"
          style={{ cursor: "pointer", color: "black", textDecoration: "none" }}
        >
          <Typography variant="h6">About</Typography>
        </Link>
        <Link
          className="nav_head"
          to="/contact"
          style={{ cursor: "pointer", textDecoration: "none", color: "black" }}
        >
          <Typography variant="h6">Contact</Typography>
        </Link>
      </Stack>

      <Stack
        className="iconsonesd"
        flexDirection="row"
        alignItems="center"
        gap="10px"
      >
        <Link
          to="/orders"
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          <Box color="black">
            <MdAddShoppingCart style={{ fontSize: "24px" }} />
          </Box>
        </Link>

        <Box border="1px solid" height="20px"></Box>
        <Link
          to="/favourites"
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          <Stack
            color="black"
            flexDirection="row"
            alignItems="center"
            gap="10px"
          >
            <FavoriteBorderIcon />
          </Stack>
        </Link>

        <Box border="1px solid black" height="20px"></Box>

        {user ? (
          <>
            <Typography variant="h6">{user.name}</Typography>
            <Button sx={{ color: "black" }} onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link style={{ textDecoration: "none" }} to="/login">
              <Button sx={{ color: "black", width: "50px" }} variant="text">
                Login
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/signup">
              <Button
                className="sign_btn"
                variant="text"
                sx={{
                  width: "100px",
                  color: "white",
                  backgroundColor: "black",
                }}
              >
                Sign up
              </Button>
            </Link>
          </>
        )}
      </Stack>

      <BurgerMenu />
   
    </Stack>
  );
};

export default HeadNav;