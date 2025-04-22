import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { Modal, Button, Accordion, Col, Form } from "react-bootstrap";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdLink } from "react-icons/io";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";

// Avatar images
import avatar1 from "../../../assets/Images/avatar.png";
import avatar2 from "../../../assets/Images/avatar2.png";
import avatar3 from "../../../assets/Images/avatar3.png";
import avatar4 from "../../../assets/Images/avatar.png";
import avatar5 from "../../../assets/Images/avatar.png";
import avatar6 from "../../../assets/Images/avatar.png";
import avatar7 from "../../../assets/Images/avatar.png";
import avatar8 from "../../../assets/Images/avatar.png";

const avatarList = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
];

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(avatar1);
  const [uploadedAvatar, setUploadedAvatar] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [birthday, setBirthday] = useState("");
  const [website, setWebsite] = useState("");

  useEffect(() => {
    const savedAvatar = localStorage.getItem("userAvatar");
    if (savedAvatar) setSelectedAvatar(savedAvatar);
  }, []);

  const toggleModal = () => setShowModal(!showModal);

  const handleAvatarSelect = (imgSrc) => {
    setSelectedAvatar(imgSrc);
    setUploadedAvatar(null);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setSelectedAvatar(imgUrl);
      setUploadedAvatar(imgUrl);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("userAvatar", selectedAvatar);
    toggleModal();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Implement save functionality if needed (e.g., send to backend)
    console.log({
      displayName,
      username,
      bio,
      birthday,
      website,
      selectedAvatar,
    });
  };

  return (
    <>
      <h4 className="profileTitle pb-3">Profile</h4>

      <Col lg={7}>
        <div className="avatarWrapper pt-2">
          <Form onSubmit={handleFormSubmit}>
            {/* Avatar Section */}
            <div className="pb-1">
              <small className="fw-bold">Your Avatar</small>
            </div>
            <div className="avatarText-wrapper">
              <div className="avatarImg">
                <img
                  src={selectedAvatar}
                  alt="Current Avatar"
                  className="img-fluid"
                />
              </div>
              <button
                type="button"
                className="px-3 editAvatarBtn"
                onClick={toggleModal}
              >
                Edit
              </button>
              <p className="mb-0">
                <Link to="#">
                  Get Avatar Frame <MdKeyboardArrowRight />
                </Link>
              </p>
            </div>

            {/* Display Name */}
            <div className="avatarForm-wrapper pt-3">
              <div className="pb-1">
                <small className="fw-bold">Display Name</small>
              </div>
              <div className="avatarInput-wrapper">
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value.slice(0, 20))}
                  placeholder="Choose your own nickname"
                />
                <div className="formText-above">{displayName.length}/20</div>
              </div>
            </div>

            {/* Username */}
            <div className="avatarForm-wrapper pt-3">
              <div className="pb-1">
                <small className="fw-bold">Username</small>
              </div>
              <div className="avatarInput-wrapper">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value.slice(0, 20))}
                  placeholder="Set your ID so that users can search for you"
                />
                <div className="formText-above">{username.length}/20</div>
              </div>
              <div className="pb-3">
                <small>* Username can only be changed once per 7 days</small>
              </div>
            </div>

            {/* Bio */}
            <div className="avatarInput-wrapper pb-3">
              <div className="pb-1">
                <small className="fw-bold">Bio</small>
              </div>
              <textarea
                className="w-100 rounded-2"
                rows={5}
                value={bio}
                onChange={(e) => setBio(e.target.value.slice(0, 200))}
                placeholder=""
              ></textarea>
            </div>

            {/* Birthday */}
            <div className="avatarForm-wrapper">
              <div className="pb-1">
                <small className="fw-bold">Birthday</small>
              </div>
              <div className="avatarInput-wrapper ">
                <input
                  type="date"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                />
              </div>
            </div>

            {/* Website */}
            <div className="avatarForm-wrapper pt-3">
              <div className="pb-1">
                <small className="fw-bold">Website</small>
              </div>
              <div className="avatarInput-wrapper">
                <input
                  type="text"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value.slice(0, 100))}
                  placeholder="Add your website"
                />
                <div className="formText-above">{website.length}/100</div>
              </div>
            </div>

            <button
              type="submit"
              className="mt-3 px-4 py-2 rightTop-section-content-signup"
            >
              Save
            </button>
          </Form>

          {/* Social Accounts */}
          <div className="socialAccounts-wrapper">
            <h5 className="py-3 fw-bold">Social Accounts</h5>
            {[
              {
                icon: <FaXTwitter className="fs-5" />,
                title: "Twitter",
                desc: "Connect to your Twitter account to complete relevant tasks in Quest",
              },
              {
                icon: (
                  <RiTelegram2Fill
                    className="fs-5"
                    style={{ fill: "#2aabee" }}
                  />
                ),
                title: "Telegram",
                desc: "Connect to your Telegram account to complete relevant tasks in Quest",
              },
              {
                icon: (
                  <FaDiscord className="fs-5" style={{ fill: "#5865f2" }} />
                ),
                title: "Discord",
                desc: "The people you block won’t be able to follow or message you, and you won’t see notifications from them.",
                buttonText: "Connect",
              },
            ].map(({ icon, title, desc, buttonText = "Connect" }, i) => (
              <div
                key={i}
                className="socialAccountsText-wrapper d-flex align-items-center justify-content-between py-3 gap-3"
                style={{ borderBottom: "1px solid var(--border-color)" }}
              >
                <div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    {icon}
                    <h6 className="mb-0">{title}</h6>
                  </div>
                  <p className="mb-0">{desc}</p>
                </div>
                <div>
                  <button className="px-3 d-flex gap-2 align-items-center connectBtn">
                    <IoMdLink className="fs-6" />
                    <p className="mb-0">{buttonText}</p>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Community Section */}
          <div className="socialAccounts-wrapper">
            <h5 className="py-3 fw-bold">Community</h5>
            <div
              className="socialAccountsText-wrapper d-flex align-items-center justify-content-between pb-3 gap-3"
              style={{ borderBottom: "1px solid var(--border-color)" }}
            >
              <div>
                <h6>Blocked accounts</h6>
                <p className="mb-0">
                  Connect to your Twitter account to complete relevant tasks in
                  Quest
                </p>
              </div>
              <div>
                <button className="px-3 text-center">
                  <p className="mb-0">Manage</p>
                </button>
              </div>
            </div>
            <div
              className="socialAccountsText-wrapper d-flex align-items-center justify-content-between py-3 gap-2"
              style={{ borderBottom: "1px solid var(--border-color)" }}
            >
              <div>
                <h6>Account Deletion</h6>
                <p className="mb-0">
                  You can request your CoinMarketCap account to be deleted along
                  with all your associated data. Your request will be processed
                  within 21 days.
                </p>
              </div>
              <div>
                <button className="text-center">
                  <p className="mb-0 text-nowrap">Request Account Deletion</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Col>

      {/* Avatar Modal */}
      <Modal show={showModal} onHide={toggleModal} centered>
        <Modal.Header closeButton className="pb-0 border-0">
          <Modal.Title className="fs-5 fw-semibold">Your Avatar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Let's face it, we're all good looking' people 😎 so upload your best
            profile photo. You can also redeem avatars from our Rewards page.
          </p>
          <h6 className="fw-semibold">Custom Avatar</h6>
          <div className="avatarText-wrapper mb-3 d-flex align-items-center gap-3">
            <div className="avatarImg">
              <img
                src={selectedAvatar}
                alt="Preview Avatar"
                className="img-fluid"
              />
            </div>
            <label className="button rightTop-section-content-signup d-flex align-items-center gap-2 mb-0 cursor-pointer">
              <AiOutlineCloudUpload /> Upload
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                hidden
              />
            </label>
          </div>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="border-0 pt-3">
              <Accordion.Header className="border-0 profileAccordionHeader">
                Preset Avatar
              </Accordion.Header>
              <Accordion.Body style={{ maxHeight: "140px", overflowY: "auto" }}>
                <div className="d-flex flex-wrap gap-3">
                  {avatarList.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      className={`avatarImg ${
                        selectedAvatar === imgSrc ? "bg-success p-2" : ""
                      }`}
                      onClick={() => handleAvatarSelect(imgSrc)}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={imgSrc}
                        alt={`avatar-${idx + 1}`}
                        className="img-fluid"
                      />
                    </div>
                  ))}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Modal.Body>
        <Modal.Footer className="pt-0 border-0">
          <Button
            className="rightTop-section-content-signup w-100 py-2"
            onClick={handleSave}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Profile;
