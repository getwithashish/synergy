function openSweetAlert(htmlContainerCode) {
    Swal.fire({
      title: "<strong style='color: white;'>Train List</strong>",
      width: "max-content",
      // width: "82px",
      html: `
      <style>
        #trainDetailsContainer {
          width: 100%;
          height: 300px;
          overflow: auto; /* This makes the div scrollable */
          overflow-x: hidden;
          padding-left: 10px;
          padding-right: 25px;
        }
        body.swal2-shown > [aria-hidden='true'] {
          transition: 0.1s filter;
          filter: blur(3px);
        }
      </style>
      ${htmlContainerCode}
      `,
      customClass: {
        popup: 'colored-popup'
      },
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Great!
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>
      `,
      cancelButtonAriaLabel: "Thumbs down"
    });

  }
  