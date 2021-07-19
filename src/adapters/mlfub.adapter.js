import AxiosAdapter from "./axios.adapter";

class MLFUBController extends AxiosAdapter {
  chkDplctFundPrcUpld(payload) {
    const { fndAbbNm } = payload;
    return this.instance.get("/chkDplctFundPrcUpld", { params: { fndAbbNm } });
  }

  ldFundPriceEnqry(payload) {
    const { fndPrcHstryFlg, fndPrcTlrncRt, schmUuidlst, frmDt, toDt } = payload;
    return this.instance.get("/ldFundPriceEnqry", {
      params: fndPrcHstryFlg,
      fndPrcTlrncRt,
      schmUuidlst,
      frmDt,
      toDt,
    });
  }

  svFundPrcUpdt(payload) {
    const { fundUuid, prcAmnt } = payload;
    return this.instance.post("/svFundPrcUpdt", { fundUuid, prcAmnt });
  }
}

export default new MLFUBController({
  baseURL: process.env.REACT_APP_MLFUB_BASE_URL,
});
