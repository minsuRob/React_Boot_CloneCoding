import { render, screen } from '@testing-library/react'
import React, { useState } from 'react'
import Type from '../Type';

test("dis img from server", async() => { // server에서 비동기처리해서 이미지 요청
    render(<Type orderType="products" />);

    const productImages = await screen.findAllByRole("img", { // file이 하나가 아니기에 findAllByRole 사용
        name: /product$/i, // 정규식
    });

    expect(productImages).toHaveLength(2); // sample이 2개이기에

    const altText = productImages.map((element) => element.alt);
    expect(altText).toEqual(["America product", "England product"]);
});