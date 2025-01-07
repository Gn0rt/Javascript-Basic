function functionLeftToRight(id) {
    // Get the HTML element by its id
    var element = document.getElementById(id);

    // Access the text node inside the element (assuming no other children)
    //Truy cập nút văn bản bên trong phần tử (giả sử không có phần tử con nào khác)
    var textNode = element.childNodes[0];

    // Extract the initial text content of the text 
    //Trích xuất nội dung văn bản ban đầu của nút văn bản
    var text = textNode.data;

    // Set up an interval to rotate the characters in the text every 100 milliseconds
    // Thiết lập khoảng thời gian để xoay các ký tự trong văn bản cứ sau 100 mili giây
    setInterval(function () {
        // Move the last character to the beginning of the string
        //Di chuyển ký tự cuối cùng về đầu chuỗi
        text = text[text.length - 1] + text.substring(0, text.length - 1);

        // Update the text content of the text node with the modified string
        //Cập nhật nội dung văn bản của nút văn bản bằng chuỗi đã sửa đổi
        textNode.data = text;
    }, 100);
}