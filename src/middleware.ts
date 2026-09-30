import { NextRequest, NextResponse } from 'next/server';

export async function middleware(_request: NextRequest) {
  // 已去除进入应用的密码校验，所有请求直接放行
  return NextResponse.next();
}

// 配置middleware匹配规则
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|login|warning|api/login|api/register|api/logout|api/cron|api/server-config).*)',
  ],
};
