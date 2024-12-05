(() => {
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");
  const materialList = document.querySelector("#material-list");
  const materialTemplate = document.querySelector("#material-template");

  const infoBoxesURL = "https://swiftpixel.com/earbud/api/infoboxes";
  const materialsBoxURL = "https://swiftpixel.com/earbud/api/materials";

  const infoBoxes = [
    {
      heading: "sleek body design",
      description: "The sleek design of earbuds is compact and stylish, with smooth curves and a lightweight build. This minimalist look ensures they fit comfortably and discreetly, making them perfect for everyday use and easy to carry around",
      thumbnail: "images/smile.png",
    },
    {
      heading: "play earbud",
      description: 'Soft ear buds are gentle on the ear canal, preventing irritation and reducing the risk of injury. They clean earwax safely without pushing it deeper, which helps avoid blockages or discomfort.',
      thumbnail: "images/play_.png",
    },
    {
      heading: "hear good quality",
      description: "'Soft ear buds are gentle on the ear canal, preventing irritation and reducing the risk of injury. They clean earwax safely without pushing it deeper, which helps avoid blockages or discomfort",
      thumbnail: "images/hear.png",
    },
    {
      heading: "audia earbud",
      description: "Super luxury earbud crafted for expensive listening",
      thumbnail: "images/logogogogogo.jpg",
    },
  ];

  const materials = [
    {
      heading: "sleek body design",
      description: "The sleek design of earbuds is compact and stylish, with smooth curves and a lightweight build. This minimalist look ensures they fit comfortably and discreetly, making them perfect for everyday use and easy to carry around",
      image: "images/smile.png",
    },
    {
      heading: "play earbud",
      description: 'Soft ear buds are gentle on the ear canal, preventing irritation and reducing the risk of injury They clean earwax safely without pushing it deeper, which helps avoid blockages or discomfort.',
      image: "images/play_.png",
    },
    {
      heading: "hear good quality",
      description: "'Soft ear buds are gentle on the ear canal, preventing irritation and reducing the risk of injury. They clean earwax safely without pushing it deeper, which helps avoid blockages or discomfort",
      image: "images/hear.png",
    },
    {
      heading: "audia earbud",
      description: "Super luxury earbud crafted for expensive listening",
      image: "images/logogogogogo.jpg",
    },
  ];

  
  const handleError = (message) => {
    console.error(message);
    alert(message);
  };

 
  const loadMaterialInfo = () => {
    fetch(materialsBoxURL)
      .then((response) => response.json())
      .then(() => {
        materials.forEach((material) => {
          const li = document.createElement("li");
          const heading = document.createElement("h3");
          heading.textContent = material.heading;
          const description = document.createElement("p");
          description.textContent = material.description;
          const image = document.createElement("img");
          image.src = material.image;

          li.appendChild(heading);
          li.appendChild(description);
          li.appendChild(image);

          materialList.appendChild(li);
        });
      })
      .catch((error) => handleError("Oh hey,loading failed, please reload after some minutes"));
  };

  
  const loadInfoBoxes = () => {
    fetch(infoBoxesURL)
      .then((response) => response.json())
      .then(() => {
        infoBoxes.forEach((infoBox, index) => {
          const selected = document.querySelector(`#hotspot-${index + 1}`);

          const titleElement = document.createElement("h2");
          titleElement.textContent = infoBox.heading;

          const textElement = document.createElement("p");
          textElement.textContent = infoBox.description;

          const imageElement = document.createElement("img");
          imageElement.src = infoBox.thumbnail;

          selected.appendChild(titleElement);
          selected.appendChild(textElement);
          selected.appendChild(imageElement);
        });
      })
      .catch((error) => handleError("Oopsie error,try again"));
  };

  
  const showInfo = function () {
    const selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  };


  const hideInfo = function () {
    const selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  };

  
  const modelLoaded = () => {
    hotspots.forEach((hotspot) => {
      hotspot.style.display = "block";
    });
  };


  model.addEventListener("load", modelLoaded);

  
  hotspots.forEach((hotspot) => {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });

  loadMaterialInfo();
  loadInfoBoxes();
})();
