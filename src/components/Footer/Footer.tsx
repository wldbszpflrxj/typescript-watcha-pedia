import React from "react";
import * as Styled from "./Footer.styled";
import { AiFillStar } from "react-icons/ai";

export default function Footer() {
  return (
    <Styled.Base>
      <Styled.Section>
        <Styled.Statistics>
          <Styled.Summary>
            지금까지
            <Styled.Emphasis>
              <AiFillStar /> 644,734,343 개의 평가가
            </Styled.Emphasis>
            쌓였어요
          </Styled.Summary>
        </Styled.Statistics>
        <Styled.Container>
          <Styled.ContentWrapper>
            <Styled.Left>
              <Styled.TermAndPolicy>
                <Styled.TermAndPolicyItem>
                  서비스 이용약관
                </Styled.TermAndPolicyItem>
                <Styled.TermAndPolicyItem>
                  개인정보 처리방침
                </Styled.TermAndPolicyItem>
                <Styled.TermAndPolicyItem>회사 정보</Styled.TermAndPolicyItem>
              </Styled.TermAndPolicy>
            </Styled.Left>
            <Styled.Right />
          </Styled.ContentWrapper>
        </Styled.Container>
      </Styled.Section>
    </Styled.Base>
  );
}
