import MessageBase from "./MessageBase";

class RemoteMessage extends MessageBase {
  getMessageClassName() {
    return "message message--remote";
  }
}

export default RemoteMessage;
