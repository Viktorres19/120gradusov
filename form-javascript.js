function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    service: document.getElementById("service").value,
  };

  const serviceID = "service_ktfmpd6";
  const templateID = "template_s5p3o8o";

  emailjs.send(serviceID, templateID, params)
    .then(res=>{
      document.getElementById("name").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("service").value = "";
      document.getElementById("alert").classList.add("contact-form__message");
      window.setTimeout(() => {
        document.getElementById("alert").classList.remove("contact-form__message");
      }, 4000);
    })
    .catch(err=>console.log(err));
}
