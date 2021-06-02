import { pick } from "lodash";
import AxiosAdapter from "./axios.adapter";

class TerminationAdapter extends AxiosAdapter {
  getClientSchemes(payload) {
    const pickedPayload = pick(payload, ["accountNumber"]);
    return this.instance.get("/ldEETermEdtMd", {
      params: { ...pickedPayload },
    });
  }

  getMbrTerm(payload) {
    const pickedPayload = pick(payload, ["enttyUuid"]);
    return this.instance.get("/vldMbrTerm", {
      params: { ...pickedPayload },
    });
  }

  save(payload) {
    return this.instance.post("/svEETermInst", payload);
  }

  postValidate(payload) {
    return this.instance.post("/vldEETermSbmssn", payload);
  }

  // IMPORTANT: MULTIPLE API CALLS

  // postValidate(payload) {
  //   return new Promise(async(resolve, reject) => {
  //     try {
  //       const response = await this.instance.post("/vldEETermSbmssn", payload)
  //       resolve(response)
  //     } catch (error) {
  //       reject("Error")
  //     }
  //   });
  // }
}

export default new TerminationAdapter({
  baseURL: process.env.REACT_APP_TERMINATION_BASE_URL,
});
