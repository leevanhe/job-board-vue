import { describe, it, expect } from 'vitest'
import { mount } from "@vue/test-utils";
import CCard from "../CCard.vue";

describe('CCard tests', () => {
  it('CCard is no link', () => {
    const card = mount(CCard)

    expect(card.html()).toBe('<div class="block max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow"></div>')
  });
});