<?php 

// Contact form with validation | For contact Section
if(isset($_POST['submit-btn'])){
    // Passing Values into Variables
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $messege = $_POST['messege'];

    // If inputes are empty
    $error = [];

    if(empty($_POST['name'])){
        $error['name'] = 'Please Enter Your Name';
    }
    if(empty($_POST['email'])){
        $error['email'] = 'Please Enter Your Email';
    }
    if(empty($_POST['subject'])){
        $error['subject'] = 'Please Enter Your Subject';
    }
    if(empty($_POST['messege'])){
        $error['messege'] = 'Please Write Your Messege';
    } 

    if(!empty($name) && !empty($email) && !empty($subject) && !empty($messege)){
        // Sending Mail to Email
        // Always set content-type when sending HTML email
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        
        
        $to = 'nabilsiddik90@gmail.com';
        $from = 'From ' . $name;
        $subject = $subject;
        $body = "
        

        <div class='template-logo' style='text-align: center;'>
            <h2 style='font-size: 80px;'>Folio<span style='color: crimson'>Me.</span></h2>
        </div>
        <div class='messege-body' style='max-width: 1000px; margin: 0 auto; text-align: center'>
            <table style='border: 2px solid black; width: 100%; font-size: 15px;'>
                <tr style='padding: 10px;'>
                    <th style='padding-top: 10px; padding-bottom: 20px; border: 2px solid black;'>Name</th>
                    <th style='padding-top: 10px; padding-bottom: 20px; border: 2px solid black;'>Email</th>
                    <th style='padding-top: 10px; padding-bottom: 20px; border: 2px solid black;'>Subject</th>
                </tr>
                <tr>
                    <td style='padding-top: 10px; padding-bottom: 20px; border: 2px solid black;'>$name</td>
                    <td style='padding-top: 10px; padding-bottom: 20px; border: 2px solid black;'>$email</td>
                    <td style='padding-top: 10px; padding-bottom: 20px; border: 2px solid black;'>$subject</td>
                </tr>
            </table>
            
            
            
            <table style='border: 2px solid black; width: 100%; font-size: 15px;'>
                <tr>
                    <td style='padding-top: 10px; padding-bottom: 20px; border: 2px solid black;'><b>Messege:</b> $messege</td>
                </tr>
            </table>
        </div>
        
        ";

        $mail = mail($to, $subject, $body,$headers);

        if($mail){
            $success = 'Your mail has been send successfully';
        }
    }

}