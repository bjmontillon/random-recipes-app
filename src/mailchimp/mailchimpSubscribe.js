import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://gmail.us6.list-manage.com/subscribe/post?u=e64f84234b711fab0dd2bf9a3&amp;id=7e7a7cc18b";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>

// use the render prop and your custom form
const CustomForm = () => (

  <MailchimpSubscribe

    url={url}
    render={({ subscribe, status, message }) => (
        <div>
          <SimpleForm onSubmitted={formData => subscribe(formData)} />
          {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
          {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
          {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
        </div>
    )}
  />
)

export default CustomForm


