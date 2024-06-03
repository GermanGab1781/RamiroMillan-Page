import Swal from "sweetalert2";

export const showAlert = () => {
  Swal.fire({
    title: "Contactate",
    html: `<div>
      <a href="mailto:ramirogmillan@gmail.com" style="color:orange;" target="_blank" rel="noreferrer">Mail<a/><br/><br/>
      <a href="https://www.linkedin.com/in/ramirogmillan/" style="color:orange;" target="_blank" rel="noreferrer">LinkedIn<a/><br/>
    </div>`,
    confirmButtonText: "Volver",
  });
};
