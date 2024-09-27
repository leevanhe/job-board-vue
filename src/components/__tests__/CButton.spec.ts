import { describe, it, expect } from 'vitest'
import CButton from "../CButton.vue";
import { mount } from "@vue/test-utils";

describe('CButton tests', () => {
  it('CButton is button', () => {
    const button = mount(CButton, {
      propsData: {
        type: 'button'
      }
    })

    expect(button.classes()).toContain('rounded-lg')
  });

  it('CButton is link', () => {
    const button = mount(CButton, {
      propsData: {
        type: 'link'
      }
    })

    expect(button.classes()).toContain('text-white')
  });

  it('CButton is danger link', () => {
    const button = mount(CButton, {
      propsData: {
        type: 'link-danger'
      }
    })

    expect(button.classes()).toContain('text-red-500')
  })
});