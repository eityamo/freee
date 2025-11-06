import fetch from "node-fetch";

const token = process.env.FREEE_ACCESS_TOKEN;
const employeeId = 2402772; // 固定IDでOK

const now = new Date();
const date = now.toISOString().slice(0, 10); // YYYY-MM-DD

const body = {
  date,
  clock_in_at: `${date}T09:00:00+09:00`,
  clock_out_at: `${date}T18:00:00+09:00`,
  break_time_minutes: 60,
};

(async () => {
  const res = await fetch(
    `https://api.freee.co.jp/hr/api/v1/employees/${employeeId}/work_records`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  const result = await res.json();
  console.log("Result:", result);
})();
