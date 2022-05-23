class MessageBase {
  constructor(messageData) {
    this.element = document.createElement("div");
    this.element.className = this.getMessageClassName();

    const innerElement = document.createElement("div");
    innerElement.className = "message__text";
    innerElement.textContent = messageData.text;

    this.element.appendChild(innerElement);
  }

  getMessageClassName() {
    throw Error("getMessageClassName is not implemented.");
  }
}

export default MessageBase;
