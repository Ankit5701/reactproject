import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Mailer = () =>{
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_fwqig3o','template_5sp3suk',e.target,'user_nLHLcZK4Q9gsJvWwLYuBu').then(res=>{
            console.log(res);
            
        }).catch(err=>console.log(err));
    }

    const Toast=() => {
        toast("Form Sent Succesfully");
    }

    return(
        <>
        <div className="container border" 
        style={{
            marginTop: "50px",
            marginBottom: "50px",
            width: "auto",
            backgroundImage : `url(${process.env.PUBLIC_URL + '/bgimg.jpg'})`,
            backgroundPosition : "center",
            backgroundSize : "cover",

        }}>
            <h1 style={{marginTop:'25px',alignSelf:'center',color:"white"}}> <strong>Contact Form </strong></h1>
            <form className="row" style={{margin: "25px 85px 75px 100px"}} onSubmit={sendEmail}>
                <label style={{color:"white"}}><strong>Name</strong></label>
                <input type="text" name="name" placeholder="Name" className="form-control"/>

                <label style={{color:"white"}}><strong>E-Mail</strong></label>
                <input type="email" placeholder='Email' name="user_email" className="form-control"/>

                <label style={{color:"white"}}><strong>Message</strong></label>
                <textarea name='message' placeholder='message' rows='4' className="form-control"/>
                <input type='submit' value='Send' onClick={Toast} className="button" />
            </form>
        </div>
        <ToastContainer />
        </>
    );
}
export default Mailer;