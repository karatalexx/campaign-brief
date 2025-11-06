import type { ApiResponse } from "@/api/types";

export function successResponse<T>(data: T, status: number = 200): Response {
  return Response.json({ success: true, data } as ApiResponse<T>, {
    status,
  });
}

export function errorResponse(error: string): Response {
  return Response.json({ success: false, error } as ApiResponse<null>, {
    status: 500,
  });
}

export function notFoundResponse(error?: string): Response {
  return Response.json(
    { success: false, error: error ?? "Not found" } as ApiResponse<null>,
    { status: 404 },
  );
}

export function badRequestResponse(error: string): Response {
  return Response.json({ success: false, error } as ApiResponse<null>, {
    status: 400,
  });
}
