import Swal from "sweetalert2";

export const lottieSuccess = (message) =>{
    Swal.fire({
        title: message,
        icon: "success",
        draggable: true
      });
}

export const lottieError = (message) =>{
  Swal.fire({
    icon: "error",
    title: message,
    text: "Something went wrong!"
  });
}