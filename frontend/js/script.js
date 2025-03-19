// Sự kiện khi chọn file
document.getElementById("file-input").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        console.log("Đã chọn tệp:", file.name);
        // Thêm xử lý cho file nếu cần
    }
});

// Sự kiện khi nhấn nút Xóa tệp
document.getElementById("clear-button").addEventListener("click", function() {
    document.getElementById("file-input").value = "";
    document.getElementById("audio-player").src = "";
    console.log("Đã xóa tệp");
});

// Sự kiện khi nhấn nút Chuyển đổi
document.getElementById("convert-button").addEventListener("click", function() {
    alert("Audiobook đang được xử lý...");
});
