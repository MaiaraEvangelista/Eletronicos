import { ComplexAnimationBuilder } from '../animationBuilder/ComplexAnimationBuilder';
export class LinearTransition extends ComplexAnimationBuilder {
    constructor() {
        super(...arguments);
        this.build = () => {
            const delayFunction = this.getDelayFunction();
            const [animation, config] = this.getAnimationAndConfig();
            const callback = this.callbackV;
            const delay = this.getDelay();
            return (values) => {
                'worklet';
                return {
                    initialValues: {
                        originX: values.boriginX,
                        originY: values.boriginY,
                        width: values.bwidth,
                        height: values.bheight,
                    },
                    animations: {
                        originX: delayFunction(delay, animation(values.originX, config)),
                        originY: delayFunction(delay, animation(values.originY, config)),
                        width: delayFunction(delay, animation(values.width, config)),
                        height: delayFunction(delay, animation(values.height, config)),
                    },
                    callback: callback,
                };
            };
        };
    }
    static createInstance() {
        return new LinearTransition();
    }
}
export const Layout = LinearTransition;
