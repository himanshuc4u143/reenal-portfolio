import React from "react";
import DefaultLayout from "./Layout/DefaultLayout";
import EnquiryForm from "./components/EnquiryForm";

const ContactUs = () => {
    return(
        <DefaultLayout>
            <div>
                <EnquiryForm/>
            </div>
        </DefaultLayout>
    )
}

export default ContactUs;