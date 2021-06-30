import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { registrationEmployer } from "@adapters";
import { selectedCompanyUUIDSelector } from "./selectors";

export const ldCmpnyRltdPrsn = createAsyncThunk(
  "@@empf/reg/er/ldCmpnyRltdPrsn",
  async (payload, { rejectWithValue, getState }) => {
    try {
      const cmpnyUuid = selectedCompanyUUIDSelector(getState());
      const cmpnyRltdPrsn = await registrationEmployer.ldCmpnyRltdPrsn({
        cmpnyUuid,
        ...payload,
      });
      return { cmpnyPrsnTypId: payload.cmpnyPrsnTypId, cmpnyRltdPrsn };
    } catch (error) {
      return rejectWithValue({ error });
    }
  }
);

export const setSelectedClientUUID = createAction(
  "@@empf/reg/er/setSelectedClientUUID"
);

export const ldRegCmpnyInfoforAdmnPrtl = createAsyncThunk(
  "@@empf/reg/er/ldRegCmpnyInfoforAdmnPrtl",
  async (payload, { rejectWithValue, getState }) => {
    try {
      const cmpnyUuid = selectedCompanyUUIDSelector(getState());
      const regCmpnyInfo = await registrationEmployer.ldRegCmpnyInfoforAdmnPrtl(
        { cmpnyUuid, ...payload }
      );
      return { regCmpnyInfo };
    } catch (error) {
      return {
        regCmpnyInfo: {
          ldRegCmpnyInfoforAdmnPrtlProjection: {
            id: "7732b905-e9c1-4895-959e-fdce74c856b3",
            pnsnIdTxt: "PRSNIDTXT1",
            cmpnyNm: "company1",
            cmpnyTypId: "CP_PV",
            trstCmpnyCd: "TRSTCMPCD1",
            ntrTypId: "NT_IT",
            identification: {
              idChkDgtTxt: "5",
              idNoTxt: "1251225",
              idTypId: "ID_PP",
              txCntryTypCd: "PH",
            },
            incrprtnDt: "2021-04-08T02:13:32.000+00:00",
            branches: [
              {
                pnsnIdTxt: "RG202105191558200535B88173408",
                sttsTypId: "STS_1",
                brnchNm: "ER970000 Branch 001",
                brnchNoTxt: "ER970000001",
                brnchCd: 1174922400,
                cmmTypId: "cmmTypCd",
                changeDt: "2021-01-14T16:00:00.000+00:00",
                brnchDscrptnTxt: "BRNCHDESC1",
                lnggTypId: "lnggTypCd",
                incrprtnDt: "2020-03-01T16:00:00.000+00:00",
                efctvDt: "2021-05-19T16:00:00.000+00:00",
              },
            ],
            cntryTypCd: "PH",
            addresses: [
              {
                pstlCdNmbr: "1234",
                invldAddrFlg: 1,
                cntryTypCd: "reg",
                chgDt: "2021-04-14T16:00:00.000+00:00",
                addrDstrctTxt: "reg district",
                addrBldngNmTxt: "reg building name",
                addrFlrTxt: "4th",
                addrBlckTxt: "1",
                addrCtyTxt: "reg city",
                addrStrtTxt: "reg street name",
                addrTypId: "AD_C",
                addrRmTxt: "#2",
                efctvDt: "2021-04-08T02:51:39.000+00:00",
              },
              {
                pstlCdNmbr: "1",
                invldAddrFlg: 1,
                cntryTypCd: "HK",
                chgDt: "2021-01-14T16:00:00.000+00:00",
                addrDstrctTxt: "District 2",
                addrBldngNmTxt: "Zen Tower",
                addrFlrTxt: "9th Flr.",
                addrBlckTxt: "Blk 5",
                addrCtyTxt: "Eastern",
                addrStrtTxt: "Brooks",
                addrTypId: "AD_B",
                addrRmTxt: "R#110",
                efctvDt: "2021-01-04T16:00:00.000+00:00",
              },
              {
                pstlCdNmbr: "1",
                invldAddrFlg: 1,
                cntryTypCd: "HK",
                chgDt: "2021-01-14T16:00:00.000+00:00",
                addrDstrctTxt: "Ds#2",
                addrBldngNmTxt: "Bldg#2",
                addrFlrTxt: "F#2",
                addrBlckTxt: "B#2",
                addrCtyTxt: "City#2",
                addrStrtTxt: "St#2",
                addrTypId: "AD_R",
                addrRmTxt: "R#2",
                efctvDt: "2021-01-04T16:00:00.000+00:00",
              },
            ],
            cmpnyChnsNm: "公司1",
          },
          cmpnyRltdPrsns: [
            {
              clientUuid: "13717897-16eb-414f-9c06-0e8d6ece08f0",
              cmpnyPrsnTypCd: "CS_AP",
              jbPstnTxt: "Manager",
              kyRlCd: 4,
              ownrshpPrcntgCnt: 5,
              sttsTypId: "ST_AT",
              frstName: "Shen",
              lstName: "Yue",
              chnsFrstName: "Shen",
              chnsLstName: "Yuè",
            },
            {
              clientUuid: "13717897-16eb-414f-9c06-0e8d6ece08f0",
              cmpnyPrsnTypCd: "CS_AP",
              jbPstnTxt: "Accountant",
              kyRlCd: 4,
              ownrshpPrcntgCnt: 5,
              sttsTypId: "ST_AT",
              frstName: "Nelsares",
              lstName: "Paguntalan",
              chnsFrstName: "He di",
              chnsLstName: "Wang",
            },
          ],
          contactDtos: [
            {
              clntPhones: [
                {
                  version: "2021-06-14T19:35:24Z",
                  id: "c1a4a6a8-5d99-8d1a-e053-870a1facb276",
                  phnTypId: "TP_TP",
                  schmUuid: null,
                  enttyUuid: null,
                  phnCntryTypCd: "HK",
                  phnNmbr: 7788777844,
                  efctvDt: "2021-05-19T16:00:00.000+00:00",
                  chgDt: "2021-01-14T16:00:00.000+00:00",
                  cntctUuid: "c2c058c9-2338-de8c-e053-870a1fac4e2c",
                },
                {
                  version: "2021-06-02T00:29:55Z",
                  id: "c2c058c9-2342-de8c-e053-870a1fac4e2c",
                  phnTypId: "TP_MB",
                  schmUuid: null,
                  enttyUuid: null,
                  phnCntryTypCd: "HK",
                  phnNmbr: 9991455274,
                  efctvDt: "2021-05-19T16:00:00.000+00:00",
                  chgDt: "2021-01-14T16:00:00.000+00:00",
                  cntctUuid: "c2c058c9-2338-de8c-e053-870a1fac4e2c",
                },
              ],
              cntctPrsnTypId: "CT_PCP",
              schmUuid: "79cef4fb-4fb8-4530-a98e-909042525776",
              enttyUuid: null,
              ttlTypCd: "TT_MS",
              cntctPrsnNm: "Carmen Chan",
              emlAddrTxt: "Test.Manager@pccw.com",
              cmmTypId: null,
              lnggTypId: "LG_EN",
              drctMrktFlg: null,
              rcvPprFlg: null,
              efctvDt: "2021-01-04T16:00:00.000+00:00",
              chgDt: "2021-01-14T16:00:00.000+00:00",
              frstNm: "Carmen",
              lstNm: "Chan",
              jbPstnTxt: "Manager",
              titleType: "Ms.",
              langType: "English",
            },
            {
              clntPhones: [
                {
                  version: "2021-06-13T22:19:59Z",
                  id: "c1fc9f20-ca7a-23e8-e053-870a1fac5118",
                  phnTypId: "TP_MB",
                  schmUuid: null,
                  enttyUuid: null,
                  phnCntryTypCd: "HK",
                  phnNmbr: 9991455274,
                  efctvDt: "2021-05-19T16:00:00.000+00:00",
                  chgDt: "2021-01-14T16:00:00.000+00:00",
                  cntctUuid: "c1fc9f20-ca78-23e8-e053-870a1fac5118",
                },
                {
                  version: "2021-06-14T19:33:15Z",
                  id: "c1a4a6a8-5d97-8d1a-e053-870a1facb276",
                  phnTypId: "TP_TP",
                  schmUuid: null,
                  enttyUuid: null,
                  phnCntryTypCd: "HK",
                  phnNmbr: 7788777844,
                  efctvDt: "2021-05-19T16:00:00.000+00:00",
                  chgDt: "2021-01-14T16:00:00.000+00:00",
                  cntctUuid: "c1fc9f20-ca78-23e8-e053-870a1fac5118",
                },
                {
                  version: "2021-06-14T19:34:40Z",
                  id: "c1a4a6a8-5d98-8d1a-e053-870a1facb276",
                  phnTypId: "TP_TP",
                  schmUuid: null,
                  enttyUuid: null,
                  phnCntryTypCd: "HK",
                  phnNmbr: 7788777844,
                  efctvDt: "2021-05-19T16:00:00.000+00:00",
                  chgDt: "2021-01-14T16:00:00.000+00:00",
                  cntctUuid: "c1fc9f20-ca78-23e8-e053-870a1fac5118",
                },
              ],
              cntctPrsnTypId: "CT_SCP",
              schmUuid: "79cef4fb-4fb8-4530-a98e-909042525776",
              enttyUuid: null,
              ttlTypCd: "TT_MR",
              cntctPrsnNm: "John Doe",
              emlAddrTxt: "j.doe@pccw.com",
              cmmTypId: null,
              lnggTypId: "LG_EN",
              drctMrktFlg: null,
              rcvPprFlg: null,
              efctvDt: "2021-01-04T16:00:00.000+00:00",
              chgDt: "2021-01-14T16:00:00.000+00:00",
              frstNm: "John",
              lstNm: "Doe",
              jbPstnTxt: "Administrator",
              titleType: "Mr.",
              langType: "English",
            },
          ],
          countryTyp: {
            version: null,
            id: "c172a061-2f46-464f-e053-870a1fac8115",
            cntryTypCd: "PH",
            cntryTypNm: "Phil",
            telCntryCdNmbr: 63,
            cntryChnsTypNm: "菲律宾",
          },
          customTypId: {
            version: null,
            id: "c172a061-2e36-464f-e053-870a1fac8115",
            cstmTypId: "ID_PP",
            cstmGrpId: "ID",
            cstmGrpTxt: "Individual ID Type",
            cstmTypDtlTxt: "Passport",
            lnggTypId: "en",
          },
          customTypNt: {
            version: null,
            id: "c172a061-2e5c-464f-e053-870a1fac8115",
            cstmTypId: "NT_IT",
            cstmGrpId: "NT",
            cstmGrpTxt: "ER Nature Type",
            cstmTypDtlTxt: "Information Technology",
            lnggTypId: "en",
          },
          customTypCmpnyTyp: {
            version: null,
            id: "c172a061-2e55-464f-e053-870a1fac8115",
            cstmTypId: "CP_PV",
            cstmGrpId: "CP",
            cstmGrpTxt: "Company Type",
            cstmTypDtlTxt: "Private Limited Company",
            lnggTypId: "en",
          },
        },
      };
      return rejectWithValue({ error });
    }
  }
);

export const setSelectedCompanyUUID = createAction(
  "@@empf/reg/er/setSelectedCompanyUUID"
);
