/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Myfitrackrv2DB } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type Myfitrackrv2DBUpdateFormInputValues = {
    count?: number;
};
export declare type Myfitrackrv2DBUpdateFormValidationValues = {
    count?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Myfitrackrv2DBUpdateFormOverridesProps = {
    Myfitrackrv2DBUpdateFormGrid?: FormProps<GridProps>;
    count?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Myfitrackrv2DBUpdateFormProps = React.PropsWithChildren<{
    overrides?: Myfitrackrv2DBUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    myfitrackrv2DB?: Myfitrackrv2DB;
    onSubmit?: (fields: Myfitrackrv2DBUpdateFormInputValues) => Myfitrackrv2DBUpdateFormInputValues;
    onSuccess?: (fields: Myfitrackrv2DBUpdateFormInputValues) => void;
    onError?: (fields: Myfitrackrv2DBUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: Myfitrackrv2DBUpdateFormInputValues) => Myfitrackrv2DBUpdateFormInputValues;
    onValidate?: Myfitrackrv2DBUpdateFormValidationValues;
}>;
export default function Myfitrackrv2DBUpdateForm(props: Myfitrackrv2DBUpdateFormProps): React.ReactElement;
