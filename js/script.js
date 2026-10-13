function toggleMenu(){document.getElementById("mainNav").classList.toggle("open");}
function filterProducts(cat, btn){
  document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".product-item").forEach(p=>{
    p.style.display=(cat==="all"||p.dataset.cat===cat)?"block":"none";
  });
}
function showProduct(name){
  document.getElementById("modalTitle").textContent=name;
  document.getElementById("modal").classList.add("show");
}
function closeModal(e){
  if(!e || e.target.id==="modal" || e.target.classList.contains("close"))
    document.getElementById("modal").classList.remove("show");
}
function submitForm(e){
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const msg=document.getElementById("formMsg");
  msg.textContent=`Cảm ơn ${name}! Tin nhắn của bạn đã được ghi nhận.`;
  e.target.reset();
}
function toggleChat() {
    const chatBox = document.getElementById("chatBox");
    if (chatBox) {
        chatBox.classList.toggle("show");
    }
}
function sendMessage() {
    const input = document.getElementById("chatInput");
    const messages = document.getElementById("chatMessages");
    if (!input || !messages) {
        return;
    }
    const text = input.value.trim();
    if (text === "") {
        return;
    }
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = text;
    messages.appendChild(userMessage);
    input.value = "";
    messages.scrollTop = messages.scrollHeight;
    setTimeout(function () {
        const botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        let reply =
            "Cảm ơn bạn đã liên hệ TechZone! 👋 " +
            "Bạn muốn tư vấn sản phẩm nào?";
        if (text.toLowerCase().includes("laptop")) {
            reply =
                "💻 TechZone hiện có nhiều mẫu laptop. " +
                "Bạn muốn laptop gaming, học tập hay văn phòng?";
        }
        else if (text.toLowerCase().includes("chuột")) {
            reply =
                " Bạn có thể tham khảo Logitech G PRO X Superlight 2 " +
                "với độ phân giải 8kHz Polling 8000 DPI";
        }
        else if (text.toLowerCase().includes("bàn phím")) {
            reply =
                " Wooting 60HE+ " +
                "phù hợp cho gaming.";
        }
        else if (text.toLowerCase().includes("tai nghe")) {
            reply =
                "  HyperX Cloud III Gaming " +
                "và chống ồn.";
        }
        botMessage.textContent = reply;
        messages.appendChild(botMessage);
        messages.scrollTop = messages.scrollHeight;
    }, 700);
}
