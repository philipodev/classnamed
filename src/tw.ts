import { ComponentType } from "react";
import domElements from "./domElements";

type Target = string | ComponentType<*>;

const tw = (tag: Target)