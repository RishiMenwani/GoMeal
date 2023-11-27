import Image from "next/image";
import React from "react";

const RightSidebar = () => {
  return (
    <div className="flex justify-start px-3">
      <div className="flex flex-row py-3">
        <div class="relative">
          <Image
            src={"./Images/RightSidebar/order-discussion.svg"}
            width={30}
            height={27}
          />
        </div>
        <div class="relative">
          <Image
            src={"./Images/RightSidebar/notification.svg"}
            width={30}
            height={25}
          />
        </div>
        <div class="relative">
          <Image
            src={"./Images/RightSidebar/setting.svg"}
            width={30}
            height={25}
          />
        </div>
        <div className="ml-16">
          <Image
            src={"/Images/RightSidebar/placeholder.png"}
            width={30}
            height={25}
          />
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
