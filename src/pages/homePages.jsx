import React from "react";
import './pagesStyle.css'

export default function HomePages() {
    return (
        <div className="container-landing-page">
            <div className="text-landing-page">
                Welcome to the Design World !
            </div>
            <div className="gallery">
                <img src="https://i.pinimg.com/736x/74/f1/5c/74f15caa7c8dbbcebb915062c7b15741.jpg" alt="homeimg-01" />
                <img src="https://i.pinimg.com/564x/05/89/0a/05890a039cf6160907803953b7163f7c.jpg" alt="homeimg-02" />
                <img src="https://i.pinimg.com/564x/42/ed/05/42ed05497e229de94f53eb561c0c930a.jpg" alt="homeimg-03" />
                <img src="https://i.pinimg.com/736x/74/f1/5c/74f15caa7c8dbbcebb915062c7b15741.jpg" alt="homeimg-04" />
                <img src="https://i.pinimg.com/564x/05/89/0a/05890a039cf6160907803953b7163f7c.jpg" alt="homeimg-05" />
            </div>
        </div>
    )
}