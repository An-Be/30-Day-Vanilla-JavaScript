const inputs = document.querySelectorAll("input");

handleUpdate = (e) => {
    const suffix = e.target.dataset.sizing || "";
    console.log(e.target.name);
    document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix);
    
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));