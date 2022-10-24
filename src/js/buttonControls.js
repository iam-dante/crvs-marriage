$(document).ready(function () {
 
  // Marriage
  $("#brideNext").click(() => {
    document.getElementById("mainpage").scrollIntoView();
    
    $("#brideId").addClass("stepper-active");
    $("#groomId").removeClass("stepper-active");

    // $(".heightstepper").attr("style", "height: 1100px");

    $("#brideDiv").attr("style", "display: block");
    $("#groomDiv").attr("style", "display: none");
    $("#groomId").addClass("stepper-completed");
  });

  $("#prevGroom").click(() => {
    document.getElementById("mainpage").scrollIntoView();
   
    $("#groomId").addClass("stepper-active");
    $("#brideId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 1600px");

    $("#groomDiv").attr("style", "display: block");
    $("#brideDiv ").attr("style", "display: none");
    
  });

   $("#regNext").click(() => {
     document.getElementById("mainpage").scrollIntoView();

     $("#regId").addClass("stepper-active");
     $("#brideId").removeClass("stepper-active");

     $(".heightstepper").attr("style", "height: 400px");

     $("#regDiv").attr("style", "display: block");
     $("#brideDiv").attr("style", "display: none");
     $("#brideId").addClass("stepper-completed");
   });

   $("#prevBride").click(() => {
     document.getElementById("mainpage").scrollIntoView();

     $("#brideId").addClass("stepper-active");
     $("#regId").removeClass("stepper-active");

     $(".heightstepper").attr("style", "height: 1600px");

     $("#brideDiv").attr("style", "display: block");
     $("#regDiv ").attr("style", "display: none");
     
   });

   $("#witNext").click(() => {
     document.getElementById("mainpage").scrollIntoView();

     $("#witId").addClass("stepper-active");
     $("#regId").removeClass("stepper-active");

     $(".heightstepper").attr("style", "height: 400px");

     $("#witDiv").attr("style", "display: block");
     $("#regDiv").attr("style", "display: none");
     $("#regId").addClass("stepper-completed");
   });

   $("#prevReg").click(() => {
     document.getElementById("mainpage").scrollIntoView();

     $("#regId").addClass("stepper-active");
     $("#witId").removeClass("stepper-active");

     $(".heightstepper").attr("style", "height: 400px");

     $("#regDiv").attr("style", "display: block");
     $("#witDiv").attr("style", "display: none");
     
   });

   $("#attmarrNext").click(() => {
     document.getElementById("mainpage").scrollIntoView();

     $("#attmarrId").addClass("stepper-active");
     $("#witId").removeClass("stepper-active");

     $(".heightstepper").attr("style", "height: 400px");

     $("#attmarrDiv").attr("style", "display: block");
     $("#witDiv").attr("style", "display: none");
     $("#witId").addClass("stepper-completed");
   });

   $("#prevWit").click(() => {
     document.getElementById("mainpage").scrollIntoView();

     $("#witId").addClass("stepper-active");
     $("#attmarrId").removeClass("stepper-active");

     $(".heightstepper").attr("style", "height: 400px");

     $("#witDiv").attr("style", "display: block");
     $("#attmarrDiv").attr("style", "display: none");
   });

   $("#desmarrNext").click(() => {
     document.getElementById("mainpage").scrollIntoView();

     $("#desmarrId").addClass("stepper-active");
     $("#attmarrId").removeClass("stepper-active");

     $(".heightstepper").attr("style", "height: 1000px");

     $("#desmarrDiv").attr("style", "display: block");
     $("#attmarrDiv").attr("style", "display: none");
     $("#attmarrId").addClass("stepper-completed");
   });

   $("#prevAttmarr").click(() => {
     document.getElementById("mainpage").scrollIntoView();

     $("#attmarrId").addClass("stepper-active");
     $("#desmarrId").removeClass("stepper-active");

     $(".heightstepper").attr("style", "height: 800px");

     $("#attmarrDiv").attr("style", "display: block");
     $("#desmarrDiv").attr("style", "display: none");
     $("#attmarrId").addClass("stepper-completed");
   });



  const input = document.getElementById("fileInput");

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);

    $("#fileview").attr("src", base64);
    console.log(base64);
  };

  input.addEventListener("change", (e) => {
    uploadImage(e);
  });
});
