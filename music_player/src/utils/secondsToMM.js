import moment from "moment";

const secondsToMM=(seconds)=>moment.utc(seconds * 1000).format("mm:ss");
export default secondsToMM