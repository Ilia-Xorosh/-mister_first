import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("Status from props should be in the state", () => {
        const component = create(<ProfileStatus status={'iLIA'}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('iLIA');
    });

    test("Span is displayed when rendering", () => {
        const component = create(<ProfileStatus status={'iLIA'}/>);
        const root = component.root;
        const span = root.findByType('span')
        expect(span.length).not.toBeNull();
    });

    test("Span = status", () => {
        const component = create(<ProfileStatus status={'iLIA'}/>);
        const root = component.root;
        const span = root.findByType('span')
        expect(span.children[0]).toBe('iLIA');
    });

    test("input", () => {
        const component = create(<ProfileStatus status={'iLIA'}/>);
        const root = component.root;
        expect(() => {let input = root.findByType('input')}).toThrow();
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status={'iLIA'}/>);
        const root = component.root;
        const span = root.findByType('span');
        span.props.onDoubleClick();
        const input = root.findByType('input');
        expect(input.props.value).toBe('iLIA');
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={'iLIA'} updateStatus={ mockCallback }/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});