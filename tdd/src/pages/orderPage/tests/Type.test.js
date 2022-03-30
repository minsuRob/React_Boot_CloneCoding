import { render, screen } from '@testing-library/react'
import { rest } from 'msw';
import React, { useState } from 'react'
import { server } from '../../../mocks/server';
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

test("when fetching product datas, face an error", async() => {
    server.resetHandlers(
        rest.get("http://localhost:4000/products", (req, res, ctx) => {
           return res(ctx.status(500));
        })
    );
    render(<Type orderType="products" />);

    const errorBanner = await screen.findByTestId("error-banner");
    expect(errorBanner).toHaveTextContent("에러가 발생했습니다.");
});

test("when fetching product datas, face an error", async() => {
    render(<Type orderType="options" />);

    const optionCheckboxes = await screen.findAllByRole("checkbox");
    expect(optionCheckboxes).toHaveLength(2);
});