"use client";

import React from "react";
import { Avatar } from "flowbite-react";

function CounsellerCard() {
    return (
        <div>
            <Avatar img="../../assets/images/profile.png" rounded size="lg">
                <div className="space-y-2 font-medium dark:text-white">
                    <div>Jese Leos</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        Specialized in Software Engineering
                    </div>
                </div>
            </Avatar>
        </div>
    );
}

export default CounsellerCard;
