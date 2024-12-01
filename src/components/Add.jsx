import React from "react";
import Tooltip from "@mui/material/Tooltip";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Stack,
  styled,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import VideoCameraBackOutlinedIcon from "@mui/icons-material/VideoCameraBackOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={2}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar
              alt="Senesh"
              src="https://github.com/SeneshNV/Jenvy_media/blob/main/images/200px_pp.png?raw=true"
              sx={{ width: 40, height: 40 }}
            />
            <Typography fontWeight={500} variant="span">
              Senesh Dilshan
            </Typography>
          </UserBox>
          <TextField
            id="outlined-multiline-static"
            label="Your Caption"
            placeholder="Type caption"
            multiline
            rows={3}
            sx={{ width: "100%" }}
          />

          <Stack direction="row" gap={1} mt={2} mb={3}>
            <InsertEmoticonIcon color="primary" />
            <ImageOutlinedIcon color="primary" />
            <VideoCameraBackOutlinedIcon color="primary" />
            <PersonAddAlt1OutlinedIcon color="primary" />
          </Stack>

          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="Basic button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <CalendarMonthOutlinedIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </div>
  );
};

export default Add;
