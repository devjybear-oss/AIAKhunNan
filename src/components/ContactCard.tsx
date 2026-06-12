import { LINE_URL, MAIN_CONTACT } from "@/lib/data";

export default function ContactCard() {
  return (
    <div className="card border-primary/20 p-8 md:p-9">
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary-light font-heading text-xl font-bold text-primary">
        ศ
      </div>

      <h3 className="text-center text-lg font-semibold text-slate-900">
        {MAIN_CONTACT.name}
      </h3>
      <p className="mt-1 text-center text-sm text-text-muted">
        ตัวแทนประกันชีวิต · ที่ปรึกษาการเงิน
      </p>

      <dl className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-text-muted">ใบอนุญาตตัวแทนประกันชีวิต</dt>
          <dd className="font-medium text-slate-800">{MAIN_CONTACT.license}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-text-muted">ทะเบียนผู้แนะนำการลงทุน</dt>
          <dd className="font-medium text-slate-800">
            {MAIN_CONTACT.investmentId}
          </dd>
        </div>
      </dl>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-surface-muted px-4 py-3 text-center text-sm text-text-muted">
          โทร : {MAIN_CONTACT.phone}
        </div>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-success/30 bg-success/5 px-4 py-3 text-center text-sm font-medium text-success transition hover:bg-success/10"
        >
          {MAIN_CONTACT.line}
        </a>
      </div>
    </div>
  );
}
