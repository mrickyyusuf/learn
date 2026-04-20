import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# ── 1. BUAT TABEL (seperti spreadsheet) ──────────────────────
df = pd.DataFrame({
    "Nama":     ["Alice", "Bob", "Charlie", "Diana", "Eve"],
    "Matematika": [85, 92, 78, 95, 88],
    "Fisika":     [76, 88, 82, 90, 79],
    "Kimia":      [90, 85, 70, 88, 92],
})

print("=== TABEL DATA ===")
print(df.to_string(index=False))

# ── 2. RUMUS SPREADSHEET ──────────────────────────────────────
df["Total"]     = df[["Matematika", "Fisika", "Kimia"]].sum(axis=1)      # SUM
df["Rata-rata"] = df[["Matematika", "Fisika", "Kimia"]].mean(axis=1)     # AVERAGE
df["Grade"]     = df["Rata-rata"].apply(
    lambda x: "A" if x >= 90 else "B" if x >= 80 else "C"               # IF nested
)

print("\n=== SETELAH RUMUS ===")
print(df.to_string(index=False))

# ── 3. STATISTIKA DESKRIPTIF ──────────────────────────────────
print("\n=== STATISTIKA DESKRIPTIF ===")
print(df[["Matematika", "Fisika", "Kimia"]].describe().round(2))

# ── 4. GRAFIK ─────────────────────────────────────────────────
fig, axes = plt.subplots(1, 3, figsize=(15, 5))
fig.suptitle("Analisis Nilai Siswa", fontsize=14, fontweight="bold")

# Bar chart — perbandingan nilai per siswa
df.plot(kind="bar", x="Nama", y=["Matematika", "Fisika", "Kimia"],
        ax=axes[0], title="Nilai per Mata Pelajaran", rot=0)

# Boxplot — distribusi & kuartil
df[["Matematika", "Fisika", "Kimia"]].plot(
    kind="box", ax=axes[1], title="Distribusi Nilai (Boxplot)")

# Heatmap — korelasi antar mata pelajaran
corr = df[["Matematika", "Fisika", "Kimia"]].corr()
sns.heatmap(corr, annot=True, cmap="coolwarm", ax=axes[2])
axes[2].set_title("Korelasi Antar Mapel")

plt.tight_layout()
plt.savefig("output_grafik.png", dpi=150)
print("\n✓ Grafik disimpan → output_grafik.png")

# ── 5. EXPORT KE EXCEL ────────────────────────────────────────
df.to_excel("output_nilai.xlsx", index=False)
print("✓ Data disimpan → output_nilai.xlsx")
