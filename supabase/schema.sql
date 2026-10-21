-- ProduqtEdge CRM schema
-- Run this once in the Supabase SQL editor against a fresh project.
-- Public pages read via the anon key (SELECT where published = true).
-- Admin UI writes under a signed-in user (any authenticated user is admin;
-- create your single admin account from the Supabase Auth dashboard).

-- ------- insights -------
create table if not exists public.insights (
    id uuid primary key default gen_random_uuid(),
    slug text unique not null,
    title text not null,
    topic text not null,
    type text not null,
    date text not null,
    authors text[] not null default '{}',
    cover_url text,
    summary text not null default '',
    article jsonb not null default '[]'::jsonb,
    published boolean not null default false,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- ------- case studies -------
create table if not exists public.case_studies (
    id uuid primary key default gen_random_uuid(),
    slug text unique not null,
    name text not null,
    logo_url text,
    cover_url text,
    thumb_url text,
    title text not null,
    heading text,
    blurb text not null default '',
    service text not null default '',
    article jsonb not null default '[]'::jsonb,
    published boolean not null default false,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- ------- jobs -------
create table if not exists public.jobs (
    id uuid primary key default gen_random_uuid(),
    slug text unique not null,
    title text not null,
    tags text[] not null default '{}',
    link text,
    location text not null default '',
    details jsonb not null default '[]'::jsonb,
    article jsonb not null default '[]'::jsonb,
    is_open boolean not null default true,
    published boolean not null default false,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

-- keep updated_at fresh on any row change
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
    new.updated_at = now();
    return new;
end;
$$;

drop trigger if exists trg_insights_touch on public.insights;
create trigger trg_insights_touch before update on public.insights
    for each row execute function public.touch_updated_at();

drop trigger if exists trg_case_studies_touch on public.case_studies;
create trigger trg_case_studies_touch before update on public.case_studies
    for each row execute function public.touch_updated_at();

drop trigger if exists trg_jobs_touch on public.jobs;
create trigger trg_jobs_touch before update on public.jobs
    for each row execute function public.touch_updated_at();

-- ------- row-level security -------
alter table public.insights enable row level security;
alter table public.case_studies enable row level security;
alter table public.jobs enable row level security;

-- public read of published rows (anon key, used by the website)
drop policy if exists "insights read published" on public.insights;
create policy "insights read published" on public.insights
    for select using (published = true);

drop policy if exists "case_studies read published" on public.case_studies;
create policy "case_studies read published" on public.case_studies
    for select using (published = true);

drop policy if exists "jobs read published" on public.jobs;
create policy "jobs read published" on public.jobs
    for select using (published = true);

-- admin read-all (any signed-in user can see drafts in the admin UI)
drop policy if exists "insights admin read" on public.insights;
create policy "insights admin read" on public.insights
    for select to authenticated using (true);

drop policy if exists "case_studies admin read" on public.case_studies;
create policy "case_studies admin read" on public.case_studies
    for select to authenticated using (true);

drop policy if exists "jobs admin read" on public.jobs;
create policy "jobs admin read" on public.jobs
    for select to authenticated using (true);

-- admin writes
drop policy if exists "insights admin write" on public.insights;
create policy "insights admin write" on public.insights
    for all to authenticated using (true) with check (true);

drop policy if exists "case_studies admin write" on public.case_studies;
create policy "case_studies admin write" on public.case_studies
    for all to authenticated using (true) with check (true);

drop policy if exists "jobs admin write" on public.jobs;
create policy "jobs admin write" on public.jobs
    for all to authenticated using (true) with check (true);

-- ------- storage bucket for uploaded images -------
-- run this part only if you want image uploads from the admin UI
insert into storage.buckets (id, name, public)
values ('content', 'content', true)
on conflict (id) do nothing;

drop policy if exists "content read" on storage.objects;
create policy "content read" on storage.objects
    for select using (bucket_id = 'content');

drop policy if exists "content write" on storage.objects;
create policy "content write" on storage.objects
    for insert to authenticated with check (bucket_id = 'content');

drop policy if exists "content update" on storage.objects;
create policy "content update" on storage.objects
    for update to authenticated using (bucket_id = 'content');

drop policy if exists "content delete" on storage.objects;
create policy "content delete" on storage.objects
    for delete to authenticated using (bucket_id = 'content');
