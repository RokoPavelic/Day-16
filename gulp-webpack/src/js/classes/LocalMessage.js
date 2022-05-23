import MessageBase from "./MessageBase";

class LocalMessage extends MessageBase {
  getMessageClassName() {
    return "message message--local";
  }
}

export default LocalMessage;
