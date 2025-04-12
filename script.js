function copyCode(button) {
    const codeBlock = button.nextElementSibling;
    if (!codeBlock) return;

    const code = codeBlock.textContent.trim();

    navigator.clipboard
        .writeText(code)
        .then(() => {
            button.classList.add("copied");
            button.textContent = "Copied!";
            setTimeout(() => {
                button.classList.remove("copied");
                button.textContent = "Copy";
            }, 1500);
        })
        .catch((err) => {
            console.error("Failed to copy code:", err);
            button.textContent = "Failed";
            setTimeout(() => {
                button.textContent = "Copy";
            }, 1500);
        });
}