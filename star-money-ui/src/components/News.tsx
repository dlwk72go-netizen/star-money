import React from 'react';
import { Layout, Typography, Card, Divider, Tag, Space, Breadcrumb } from 'antd';
import { PhoneOutlined, InfoCircleOutlined, LinkOutlined, BarChartOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const News = () => {
    const phoneNumber = "[010-9685-8245] 한게임 스타머니";

    return (
        <Layout style={{ minHeight: '100vh', backgroundColor: '#f0f2f5', padding: '24px' }}>
            <Content style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>

                {/* 브레드크럼 (상단 경로) */}
                <Breadcrumb style={{ marginBottom: '16px' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>Notice</Breadcrumb.Item>
                </Breadcrumb>

                <Card bordered={false} style={{ borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    {/* 헤더 섹션 */}
                    <div style={{ marginBottom: '32px', textAlign: 'center' }}>
                        {["한게임 스타머니", "한게임 포인트", "포커환전", "한게임 시작하기", "한게임 모바일 ", "안전거래"].map(tag => (
                            <Tag color="geekblue" key={tag} style={{ padding: '4px 12px', borderRadius: '15px' }}># {tag}</Tag>
                        ))}
                    </div>
                    <div style={{ marginBottom: '32px', textAlign: 'center' }}>
                        {["한게임 스타머니", "한게임 포인트", "환게임 모바일", "한게임 교환", "한게임 매입", "안전거래"].map(tag => (
                            <Tag color="geekblue" key={tag} style={{ padding: '4px 12px', borderRadius: '15px' }}># {tag}</Tag>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                        <Text type="secondary" strong>Notice</Text>
                        <Divider style={{ margin: '12px 0' }} />
                        <Title level={2} style={{ marginTop: '0', color: '#1890ff' }}>
                            ◈ 스타머니 {phoneNumber} ◈
                        </Title>
                        <Title level={4}>한게임모바일머니상으로 최대 장수 및 신뢰</Title>
                        <Text type="secondary">2026-01-19| 조회수 7682 | 일일환전 : 100건</Text>
                    </div>

                    {/* 태그 클라우드 섹션 */}
                    <div style={{ marginBottom: '32px', textAlign: 'center' }}>
                        {["한게임 스타머니", "한게임 포인트", "환게임 모바일", "한게임 교환", "한게임 매입", "안전거래"].map(tag => (
                            <Tag color="geekblue" key={tag} style={{ padding: '4px 12px', borderRadius: '15px' }}># {tag}</Tag>
                        ))}
                    </div>

                    <Divider />
                    <div
                        style={{
                            display: 'flex',
                            width: '100%',
                            marginBottom: '32px',
                            gap: 16,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <img src="/images/star-money-3.png" alt="스타머니3" />
                    </div>


                    {/* 본문 섹션 */}
                    <Typography style={{ fontSize: '16px', lineHeight: '1.8' }}>
                        <Paragraph>
                            포커 거래는 단순한 타이밍의 문제가 아닙니다. <Text strong underline>데이터를 얼마나 정확히 활용하느냐</Text>에 따라 결과가 달라집니다. 그 중심에는 언제나 한게임모바일머니상이 있습니다. 정확한 시세를 아는 사람이 결국 시장을 이깁니다.
                        </Paragraph>

                        <Paragraph>
                            <Text strong color="#1890ff"><BarChartOutlined /> 스타머니</Text>는 실시간으로 한게임모바일머니상 시세를 반영하여 언제든 최신 정보를 제공합니다. 시세가 급등하거나 하락할 때 자동 알림을 발송해 이용자가 빠르게 대응할 수 있습니다.
                        </Paragraph>

                        <Paragraph>
                            한게임모바일머니상의 시세는 거래 시간, 수요, 이벤트에 따라 지속적으로 변합니다. 주말에는 상승세를, 평일 오전에는 안정세를 보이는 경향이 있습니다. <strong>스타머니의 통계 기능</strong>은 이런 데이터를 시각적으로 정리하여 손실 없는 거래를 돕습니다.
                        </Paragraph>

                        <Paragraph>
                            거래를 준비할 때는 단기적인 시세보다 평균값을 중심으로 판단해야 합니다. <strong>스타머니의 그래프 기능</strong>은 이러한 비교를 손쉽게 제공하여 변동성이 큰 시장에서도 안정적인 거래 기준을 만들어 드립니다.
                        </Paragraph>

                        <Paragraph>
                            거래 후 데이터를 기록하는 습관은 장기적인 성장의 핵심입니다. 스타머니를 통해 언제, 어떤 조건에서 이용했는지를 정리하면 다음 거래에서 훨씬 효율적인 판단이 가능합니다.
                        </Paragraph>

                        <Paragraph style={{ padding: '20px', backgroundColor: '#fffbe6', borderLeft: '4px solid #ffe58f', borderRadius: '4px' }}>
                            무엇보다 거래의 <strong>신뢰성</strong>이 중요합니다. 스타머니는 모든 거래 내용을 실시간으로 투명하게 공개하며, <Text type="danger" strong>업계 최고 수준의 정산 시스템</Text>으로 이용자들의 신뢰를 최우선으로 생각합니다.
                        </Paragraph>
                    </Typography>

                    {/* 하단 팁 섹션 */}
                    <Card
                        size="small"
                        style={{ backgroundColor: '#e6f7ff', border: '1px solid #91d5ff', marginTop: '40px' }}
                    >
                        <Space direction="vertical" size="small">
                            <Text strong><InfoCircleOutlined /> Tip</Text>
                            <Text>
                                한게임머니시세에 대하여 더 높은 만족도를 원하신다면, 신뢰도 높은 한게임 머니상
                                <Text type="danger" strong> "스타머니" </Text>와 함께해보세요.
                            </Text>
                            <Text strong style={{ fontSize: '18px', color: '#0050b3' }}>
                                <PhoneOutlined /> 직통전화: {phoneNumber}
                            </Text>
                        </Space>
                    </Card>

                    {/* 하단 링크 섹션 */}
                    <Divider orientation="left" plain><LinkOutlined /> 관련 정보</Divider>
                    <div style={{ fontSize: '12px', color: '#8c8c8c' }}>
                        <p>https://member.newhrd.net:444/sub05/sub05_6_view.html?no=8978</p>
                        <p>https://www.designbitna.com/commu/?bmode=view&idx=168498319</p>
                    </div>
                </Card>
            </Content>

        </Layout>
    );
};

export default News;