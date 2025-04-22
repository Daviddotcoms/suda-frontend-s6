import { Filters } from "../../enums/Filters";
import { sleep } from "../../helpers/sleep";
import { Classmate } from "../../interfaces/Classmate";
import { classmatesApi } from "../api/classmatesApi";

export const actions = {
  getClassmatesAction: async (): Promise<Classmate[]> => {
    const { data } = await classmatesApi.get<Classmate[]>("/classmates");
    return data;
  },
  getTeachersAction: async (): Promise<Classmate[]> => {
    const { data } = await classmatesApi.get<Classmate[]>("/teachers");
    return data;
  },
  getClassmateById: async (id: number): Promise<Classmate> => {
    await sleep(1000);
    const toFetch = id > 15 ? "teachers" : "classmates";
    const { data } = await classmatesApi.get<Classmate>(`/${toFetch}/${id}`);
    return data;
  },
};

export const getAllAction = async (): Promise<Classmate[]> => {
  const data = [];
  const classmates = await actions.getClassmatesAction();
  const teachers = await actions.getTeachersAction();
  data.push(...classmates, ...teachers);
  return data;
};

export const getByFilter = async (filter: Filters) => {
  await sleep(1500);
  if (filter === Filters.Students) {
    return actions.getClassmatesAction();
  } else if (filter === Filters.Teachers) {
    return actions.getTeachersAction();
  } else {
    return getAllAction();
  }
};
