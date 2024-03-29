/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { breedInfoType } from "./components/dog-list/dog-display/dog-display";
export namespace Components {
    interface DogDisplay {
        "breedInfo": breedInfoType;
    }
    interface DogList {
    }
}
declare global {
    interface HTMLDogDisplayElement extends Components.DogDisplay, HTMLStencilElement {
    }
    var HTMLDogDisplayElement: {
        prototype: HTMLDogDisplayElement;
        new (): HTMLDogDisplayElement;
    };
    interface HTMLDogListElement extends Components.DogList, HTMLStencilElement {
    }
    var HTMLDogListElement: {
        prototype: HTMLDogListElement;
        new (): HTMLDogListElement;
    };
    interface HTMLElementTagNameMap {
        "dog-display": HTMLDogDisplayElement;
        "dog-list": HTMLDogListElement;
    }
}
declare namespace LocalJSX {
    interface DogDisplay {
        "breedInfo"?: breedInfoType;
    }
    interface DogList {
    }
    interface IntrinsicElements {
        "dog-display": DogDisplay;
        "dog-list": DogList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "dog-display": LocalJSX.DogDisplay & JSXBase.HTMLAttributes<HTMLDogDisplayElement>;
            "dog-list": LocalJSX.DogList & JSXBase.HTMLAttributes<HTMLDogListElement>;
        }
    }
}
