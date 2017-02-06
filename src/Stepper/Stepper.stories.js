import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs, boolean, text } from '@kadira/storybook-addon-knobs';

import Stepper from './Stepper';
import Step from './Step';
import StepButton from './StepButton';
import StepLabel from './StepLabel';
import StepContent from './StepContent';
import RaisedButton from '../RaisedButton';
import FlatButton from '../FlatButton';

class StepperHorizontalExample extends React.Component {

    state = {
        finished: false,
        stepIndex: 0,
    };

    getStepContent(stepIndex) {
        const step0Content = text('Step 0 Content', 'Select campaign settings...');
        const step1Content = text('Step 1 Content', 'What is an ad group anyways?');
        const step2Content = text('Step 2 Content', 'This is the bit I really care about!');
        switch (stepIndex) {
            case 0:
                return step0Content;
            case 1:
                return step1Content;
            case 2:
                return step2Content;
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }

    handlePrev = () => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };

    handleNext = () => {
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    };

    render() {
        const { finished, stepIndex } = this.state;
        const contentStyle = { margin: '0 16px' };
        const linear = boolean('Linear', true);

        return (
            <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
                <Stepper
                    linear={linear}
                    orientation={'horizontal'}
                    activeStep={stepIndex}
                >
                    <Step>
                        {linear ? (
                            <StepLabel>
                                {text('Step 0 Label', 'Select campaign settings')}
                            </StepLabel>
                        ) : (
                            <StepButton onClick={() => this.setState({ stepIndex: 0 })}>
                                {text('Step 0 Button Text', 'Select campaign settings')}
                            </StepButton>
                        )}
                    </Step>
                    <Step>
                        {linear ? (
                            <StepLabel>
                                {text('Step 1 Label', 'Create an ad group')}
                            </StepLabel>
                        ) : (
                            <StepButton onClick={() => this.setState({ stepIndex: 1 })}>
                                {text('Step 1 Button Text', 'Create an ad group')}
                            </StepButton>
                        )}
                    </Step>
                    <Step>
                        {linear ? (
                            <StepLabel>
                                {text('Step 2 Label', 'Create an ad')}
                            </StepLabel>
                        ) : (
                            <StepButton onClick={() => this.setState({ stepIndex: 2 })}>
                                {text('Step 2 Button Text', 'Create an ad')}
                            </StepButton>
                        )}
                    </Step>
                </Stepper>
                <div style={contentStyle}>
                    {finished ? (
                        <p>
                            <a
                                href={'#reset'}
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.setState({ stepIndex: 0, finished: false });
                                }}
                            >
                                Click here
                            </a> to reset the example.
                        </p>
                    ) : (
                        <div>
                            <p>{this.getStepContent(stepIndex)}</p>
                            <div style={{ marginTop: 12 }}>
                                <FlatButton
                                    label={'Back'}
                                    disabled={stepIndex === 0}
                                    onTouchTap={this.handlePrev}
                                    style={{ marginRight: 12 }}
                                />
                                <RaisedButton
                                    label={stepIndex === 2 ? 'Finish' : 'Next'}
                                    primary={true}
                                    onTouchTap={this.handleNext}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

class StepperVerticalExample extends React.Component {

    state = {
        finished: false,
        stepIndex: 0,
    };

    handleNext = () => {
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    };

    handlePrev = () => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };

    renderStepActions(step) {
        const { stepIndex } = this.state;

        return (
            <div style={{ margin: '12px 0' }}>
                <RaisedButton
                    label={stepIndex === 2 ? 'Finish' : 'Next'}
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    onTouchTap={this.handleNext}
                    style={{ marginRight: 12 }}
                />
                {step > 0 && (
                    <FlatButton
                        label={'Back'}
                        disabled={stepIndex === 0}
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        onTouchTap={this.handlePrev}
                    />
                )}
            </div>
        );
    }

    render() {
        const { finished, stepIndex } = this.state;
        const linear = boolean('Linear', true);

        return (
            <div style={{ maxWidth: 380, maxHeight: 400, margin: 'auto' }}>
                <Stepper
                    activeStep={stepIndex}
                    orientation={'vertical'}
                    linear={linear}
                >
                    <Step>
                        {linear ? (
                            <StepLabel>
                                {text('Step 0 Label', 'Select campaign settings')}
                            </StepLabel>
                        ) : (
                            <StepButton onClick={() => this.setState({ stepIndex: 0 })}>
                                {text('Step 0 Button Text', 'Select campaign settings')}
                            </StepButton>
                        )}
                        <StepContent>
                            <p>
                                {text('Step 0 Content',
                                    'For each ad campaign that you create, you can control ' +
                                    'how much you&apos;re willing to spend on clicks and conversions, ' +
                                    'which networks and geographical locations you want your ads ' +
                                    'to show on, and more.')
                                }
                            </p>
                            {this.renderStepActions(0)}
                        </StepContent>
                    </Step>
                    <Step>
                        {linear ? (
                            <StepLabel>
                                {text('Step 1 Label', 'Create an ad group')}
                            </StepLabel>
                        ) : (
                            <StepButton onClick={() => this.setState({ stepIndex: 1 })}>
                                {text('Step 1 Button Text', 'Create an ad group')}
                            </StepButton>
                        )}
                        <StepContent>
                            <p>
                                {text('Step 1 Content',
                                    'An ad group contains one or more ads which ' +
                                    'target a shared set of keywords.')
                                }
                            </p>
                            {this.renderStepActions(1)}
                        </StepContent>
                    </Step>
                    <Step>
                        {linear ? (
                            <StepLabel>
                                {text('Step 2 Label', 'Create an ad')}
                            </StepLabel>
                        ) : (
                            <StepButton onClick={() => this.setState({ stepIndex: 2 })}>
                                {text('Step 2 Button Text', 'Create an ad')}
                            </StepButton>
                        )}
                        <StepContent>
                            <p>
                                {text('Step 2 Content',
                                    'Try out different ad text to see what brings in the ' +
                                    'most customers, nd learn how to enhance your ads ' +
                                    'a using features like ad extensions. ' +
                                    'If you run into any problems with your ads, ' +
                                    'find out how to tell if they&apos;re running and' +
                                    'how to resolve approval issues.')
                                }
                            </p>
                            {this.renderStepActions(2)}
                        </StepContent>
                    </Step>
                </Stepper>
                {finished && (
                <p style={{ margin: '20px 0', textAlign: 'center' }}>
                    <a
                        href={'#reset'}
                        onClick={(event) => {
                            event.preventDefault();
                            this.setState({ stepIndex: 0, finished: false });
                        }}
                    >
                    Нажмите здесь
                    </a> чтобы сбросить пример
                </p>
                )}
            </div>
        );
    }
}

storiesOf('Stepper', module)
  .addDecorator(withKnobs)
  .addDecorator(muiTheme())
  .add('Horizontal', () => (
      <div style={{ padding: text('Padding', '50px'), width: text('Width', '') }}>
          <StepperHorizontalExample />
      </div>
  ))
  .add('Vertical', () => (
      <div style={{ padding: text('Padding', '50px'), width: text('Width', '') }}>
          <StepperVerticalExample />
      </div>
  ));
