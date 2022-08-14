import { mount } from "@vue/test-utils";
import notification from "../components/notification.vue";
import { describe, expect, it } from "vitest";

describe("notification.vue", () => {
    it("renders the correct style for error", () => {
        const type = 'error';
        const wrapper = mount(notification, {
            props: { type }
        });
        expect(wrapper.classes()).toEqual(
            expect.arrayContaining(['notification--error'])
        )
    });
});