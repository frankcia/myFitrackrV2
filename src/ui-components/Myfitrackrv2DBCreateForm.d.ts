/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type Myfitrackrv2DBCreateFormInputValues = {
    count?: number;
};
export declare type Myfitrackrv2DBCreateFormValidationValues = {
    count?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Myfitrackrv2DBCreateFormOverridesProps = {
    Myfitrackrv2DBCreateFormGrid?: FormProps<GridProps>;
    count?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Myfitrackrv2DBCreateFormProps = React.PropsWithChildren<{
    overrides?: Myfitrackrv2DBCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: Myfitrackrv2DBCreateFormInputValues) => Myfitrackrv2DBCreateFormInputValues;
    onSuccess?: (fields: Myfitrackrv2DBCreateFormInputValues) => void;
    onError?: (fields: Myfitrackrv2DBCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: Myfitrackrv2DBCreateFormInputValues) => Myfitrackrv2DBCreateFormInputValues;
    onValidate?: Myfitrackrv2DBCreateFormValidationValues;
}>;
export default function Myfitrackrv2DBCreateForm(props: Myfitrackrv2DBCreateFormProps): React.ReactElement;
