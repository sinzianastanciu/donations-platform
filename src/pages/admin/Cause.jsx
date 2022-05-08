import React from "react";
import { useState } from "react";
import UserLayout from "../../utils/UserLayout";
import Button from "../../components/Button";
import DonateModal from "../../components/modals/DonateModal";
import CauseModal from "../../components/modals/CauseModal";

const Cause = ({id, title, zone, target, raisedMoney }) => {
    const cause = 
            {
                id: 0,
                title: "Kids from Ukraine",
                zone: "Ukraine",
                link: "https://pfccpartners.com/wp-content/uploads/2013/06/group-holding-hands-pentagon-shape.jpg",
                summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Neque viverra justo nec ultrices dui sapien eget. Odio pellentesque diam volutpat commodo sed egestas. Nisl vel pretium lectus quam id leo in vitae. Elementum sagittis vitae et leo duis ut. Montes nascetur ridiculus mus mauris vitae. Amet mattis vulputate enim nulla aliquet. Volutpat maecenas volutpat blandit aliquam etiam erat. Pulvinar mattis nunc sed blandit libero volutpat sed. Hendrerit gravida rutrum quisque non tellus orci ac. Adipiscing elit ut aliquam purus sit amet. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Orci ac auctor augue mauris augue neque gravida.Egestas quis ipsum suspendisse ultrices gravida. Massa tempor nec feugiat nisl. Sit amet risus nullam eget felis eget nunc lobortis mattis. Diam maecenas sed enim ut sem. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Enim lobortis scelerisque fermentum dui. Sed odio morbi quis commodo odio aenean sed adipiscing diam. Ipsum dolor sit amet consectetur adipiscing elit. Magna ac placerat vestibulum lectus. Pellentesque habitant morbi tristique senectus. Nisi porta lorem mollis aliquam ut porttitor leo a. In ante metus dictum at. Nisl nunc mi ipsum faucibus. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Est velit egestas dui id ornare arcu. Libero volutpat sed cras ornare arcu dui vivamus arcu felis. Vel pretium lectus quam id leo. Neque ornare aenean euismod elementum nisi. Felis donec et odio pellentesque diam volutpat.Ultrices mi tempus imperdiet nulla malesuada. Sociis natoque penatibus et magnis. Nunc sed augue lacus viverra vitae congue. Massa vitae tortor condimentum lacinia quis vel eros. Id diam maecenas ultricies mi eget. Semper risus in hendrerit gravida rutrum quisque. Eu feugiat pretium nibh ipsum consequat nisl. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. In ornare quam viverra orci sagittis. Scelerisque varius morbi enim nunc faucibus. Sagittis purus sit amet volutpat consequat mauris nunc congue. Facilisi nullam vehicula ipsum a arcu cursus vitae. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Leo a diam sollicitudin tempor id eu nisl nunc. Et tortor consequat id porta nibh venenatis cras. Eget aliquet nibh praesent tristique magna sit amet purus gravida.Egestas pretium aenean pharetra magna. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. A cras semper auctor neque vitae tempus quam. Nulla facilisi nullam vehicula ipsum. Massa tempor nec feugiat nisl pretium fusce. Ut morbi tincidunt augue interdum. Id velit ut tortor pretium viverra suspendisse. Aenean sed adipiscing diam donec. Aliquam ultrices sagittis orci a. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Morbi tristique senectus et netus et. Vitae ultricies leo integer malesuada nunc vel risus commodo. Nisl rhoncus mattis rhoncus urna neque viverra justo nec. Leo vel fringilla est ullamcorper eget nulla. Tempor nec feugiat nisl pretium fusce id. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit."
            };
        
    const [openedModal, setOpenedModal] = useState(false);
    return (
        <UserLayout>
            <DonateModal
                modalIsOpen={openedModal}
                closeModal={() => {
                setOpenedModal(false);
            }}/>
            <div className="cause-content">
                <div className="cause-title">
                    {cause.title}
                </div>
                <div className="cause-zone">
                    {cause.zone}
                </div>
                <div className="cause-summary">
                    {cause.summary}
                </div>
                <div className="donate-btn">
                    <Button  onClick={() => setOpenedModal(true)}> Donate for this cause </Button>
                </div>
            </div>
            <img className="cause-image" src={cause.link} />
        </UserLayout>
      
    );
}

export default Cause;